package org.generation.SpringAssessment.controller;

import org.generation.SpringAssessment.controller.dto.ItemDto;
import org.generation.SpringAssessment.repository.entity.Item;
import org.generation.SpringAssessment.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;


@RestController
@RequestMapping("/item")
public class ItemController {

    final ItemService itemService;
    public ItemController( @Autowired ItemService itemService )
    {
        this.itemService = itemService;
    }

    //1) Create an API endpoint for GET HTTP Request from the client
    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Item> getItems() {
        return itemService.all();
    }

    //2) Create an API endpoint for POST HTTP Request from the client
    @CrossOrigin
    @PostMapping("/add")
    public void save(@RequestParam(name="task", required = true) String task,
                       @RequestParam(name="description", required = true) String description,
                       @RequestParam(name="startDate", required = true) String startDate,
                       @RequestParam(name="endDate", required = true) String endDate ) {

                ItemDto itemDto = new ItemDto(task, description, startDate, endDate);
        itemService.save(new Item(itemDto));
    }
}
