import { Controller, UseGuards } from "@nestjs/common";
import { RoomsService } from "./rooms.service";
import { Get, Param, Post, Body } from "@nestjs/common"
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller('rooms')
export class RoomsController {
	constructor(private readonly roomService: RoomsService) {}

	@Get()
	getAllRooms() {
		return this.roomService.findAll()
	}

	@Get('owner/:id')
	getRoomOwner(
		@Param('id') roomId : number
	) {
		return this.roomService.getRoomOwner(roomId)
	}

	@Get('/:name')
	getRoomsByName(
		@Param('name') name : string
	) {
		return this.roomService.findManyRooms(name)
	}

}