import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CustomersController } from './controllers/customers.controller';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true
    })
  ],
  controllers: [AppController, CustomersController],
  providers: [AppService],
  exports: []
})
export class AppModule implements NestModule {
  async configure(consumer: MiddlewareConsumer) {
    await consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'cats', method: RequestMethod.DELETE })
      .forRoutes(AppController);
  }
}
