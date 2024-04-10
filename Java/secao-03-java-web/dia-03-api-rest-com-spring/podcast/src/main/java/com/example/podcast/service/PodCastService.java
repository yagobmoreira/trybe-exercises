package com.example.podcast.service;

import com.example.podcast.model.Podcast;
import org.springframework.stereotype.Service;

@Service
public class PodCastService {
  public Podcast findPodcastById(Long id) {
    Podcast podcast = new Podcast();
    podcast.setId(id);
    podcast.setName("Meu podcast");
    podcast.setUrl("http://www.meupodcast.com.br");

    return podcast;
  }
}
