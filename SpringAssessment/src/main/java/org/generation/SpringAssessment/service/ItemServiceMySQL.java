package org.generation.SpringAssessment.service;

import org.generation.SpringAssessment.repository.ItemRepository;
import org.generation.SpringAssessment.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemServiceMySQL implements ItemService {

    private final ItemRepository itemRepository;

    //Constructor
    public ItemServiceMySQL(@Autowired ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }


    @Override
    public Item save(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public List<Item> all() {
        List<Item> result = new ArrayList<>();
        itemRepository.findAll().forEach(result :: add);
        return result;
    }

}   //End of ItemServiceMySQL
