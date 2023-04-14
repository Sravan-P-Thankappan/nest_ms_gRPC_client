import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';


@Module({

  imports: [ClientsModule.register([{
    name: 'MESSAGE_PACKAGE',
    transport: Transport.GRPC,
    options: {
      package: 'messages',
      protoPath: join(__dirname, '../helpers/proto/message.proto'),
    }
  }])],
  controllers: [MessageController],
  providers: [MessageService]
})
export class MessageModule { }



