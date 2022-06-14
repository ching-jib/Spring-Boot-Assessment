package org.generation.SpringAssessment.repository.entity;

import org.generation.SpringAssessment.controller.dto.ItemDto;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String task;
    private String description;
    private String startDate;
    private String endDate;

    //Constructor
    public Item() {}

    //Overloading Constructor
    public Item(ItemDto itemDto) {
        this.task = itemDto.getTask();
        this.description = itemDto.getDescription();
        this.startDate = itemDto.getStartDate();
        this.endDate = itemDto.getEndDate();
    }


    //Getter & Setter
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }


    @Override
    public String toString() {
        return "Item{" + "id=" + id + ", task='" + task + '\'' + ", description='" + description + '\'' + ", startDate='"
                + startDate + '\'' + ", endDate='" + endDate + '}';

}   } //End of Item Class
