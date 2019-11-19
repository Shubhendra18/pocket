import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AngularfirestorageService {

  constructor(private storage: AngularFireStorage) { }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'uploads';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    // this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    // task.snapshotChanges().pipe(
    //     finalize(() => this.downloadURL = fileRef.getDownloadURL() )
    //  )
    // .subscribe()
  }
}
