package org.generation.SpringAssessment.repository;

import org.generation.SpringAssessment.repository.entity.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Integer> {

}
