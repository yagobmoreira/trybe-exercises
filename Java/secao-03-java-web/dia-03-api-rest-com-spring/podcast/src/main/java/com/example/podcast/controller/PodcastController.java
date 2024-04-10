package com.example.podcast.controller;

import jakarta.websocket.server.PathParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/podcasts")
public class PodcastController {

  @GetMapping
  public String getRoot() {
    return "Yay, podcasts!";
  }

  @GetMapping("/{id}")
  public String getPodcast(@PathVariable Long id) {
    return String.format("Você pediu pelo Podcast com id: %d", id);
  }

  @GetMapping("/search")
  public String searchPodcast(@RequestParam String title) {
    return String.format("Você buscou por Podcasts com título: %s", title);
  }
}
