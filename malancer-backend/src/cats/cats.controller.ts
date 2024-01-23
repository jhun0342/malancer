import { Body, Controller, Get, HttpCode, Param, Post, Put, Query, Req } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cats.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    // @Get()
    // findAll(@Req() request : Request) : string {
    //     console.log(request);
    //     return 'This cation returns all cats';
    // }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    find(@Param('id') id) {
        return id;
    }

    @Get()
    findCats(@Query('name') name){
        return { name };
    }

    @Post()
    async create(@Body() createCatsDto : CreateCatDto ){
        this.catsService.create(createCatsDto);
    }

    @Post()
    @HttpCode(201)
    createCats(@Body('name') name){
        return name;
    }
    
    @Put()
    @HttpCode(201)
    updateCats(@Body('id') id, @Body('name') name){
        return { id, name };
    }
}
