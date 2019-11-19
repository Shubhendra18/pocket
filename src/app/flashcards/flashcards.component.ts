import { Component, OnInit } from '@angular/core';
import { PocketflashserviceService } from '../pocketflashservice.service';
import { Card, Category } from '../Model/category';
import { AngularEditorConfig } from '@kolkov/angular-editor';

import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit {

  public allcard: Card[];
  public allcategory: Category[];
  Title: string;
  id: string;
  Category: string;
  Content: string;

  private record;
  //Will use this flag for detect recording
  private recording = false;
  //Url of Blob
  private url;
  private error;


  editorConfig: AngularEditorConfig = {
    editable: true,
    // spellcheck: true,
    // height: '15rem',
    // minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no'
  };

  constructor(private q: PocketflashserviceService, private domSanitizer: DomSanitizer) {

  }
  ngOnInit() {
    this.q.GetCardData().subscribe(carddata => {
      this.allcard = carddata;
    });
    this.q.GetData().subscribe(data => {
      this.allcategory = data;
    });

  }
  addCard(adcd) {
    this.q.AddCard(adcd.value);
  }
  deleteCard(id) {
    console.log(id);
    this.q.DeleteCard(id);
  }

  updateCard(k) {
    this.id = k.id;
    this.Title = k.Title;
    this.Content = k.Content;
    this.Category = k.category;
  }
  editCard(ed) {
    this.q.UpdateCard(ed.value);
  }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  initiateRecording() {

    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  /**
   * Will be called automatically.
   */
  successCallback(stream) {
    var options = {
      mimeType: "audio/wav",
      numberOfAudioChannels: 1
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob) {
    this.url = URL.createObjectURL(blob);
  }
  /**
   * Process Error.
   */
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }
}