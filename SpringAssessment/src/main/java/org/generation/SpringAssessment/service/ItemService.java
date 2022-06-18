package org.generation.SpringAssessment.service;

import org.generation.SpringAssessment.repository.entity.Item;
import java.util.List;

public interface ItemService {

    List<Item> all();
    Item save(Item item);

}
