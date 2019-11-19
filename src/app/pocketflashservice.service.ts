import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Category, Card, Suggestion, Contact, Profile, Todo } from './Model/category';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PocketflashserviceService {
  CategoryCollection: AngularFirestoreCollection<Category>;
  FlashcardCollection: AngularFirestoreCollection<Card>;
  SuggestionCollection: AngularFirestoreCollection<Suggestion>;
  ContactCollection: AngularFirestoreCollection<Contact>;
  ProfileCollection:AngularFirestoreCollection<Profile>;
  TodoCollection:AngularFirestoreCollection<Todo>;
  
  data: Observable<Category[]>;
  carddata: Observable<Card[]>;
  suggestiondata: Observable<Suggestion[]>;
  contactdata: Observable<Contact[]>;
  profiledata: Observable<Profile[]>;
  Tododata:Observable<Todo[]>;

  constructor(private afs: AngularFirestore) {
    this.CategoryCollection = this.afs.collection('CategoryCollection');
    this.FlashcardCollection = this.afs.collection('FlashcardCollection');
    this.SuggestionCollection = this.afs.collection('SuggestionCollection');
    this.ContactCollection = this.afs.collection('ContactCollection');
    this.ProfileCollection = this.afs.collection('ProfileCollection');
    this.TodoCollection = this.afs.collection('TodoCollection');


    this.data = this.CategoryCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Category;   
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.carddata = this.FlashcardCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const carddata = a.payload.doc.data() as Card;
        carddata.id = a.payload.doc.id;
        return carddata;
      });
    }));

    this.suggestiondata = this.SuggestionCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const suggestiondata = a.payload.doc.data() as Suggestion;
        suggestiondata.id = a.payload.doc.id;
        return suggestiondata;
      });
    }));

    this.profiledata = this.ProfileCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const profiledata = a.payload.doc.data() as Profile;   
        profiledata.id = a.payload.doc.id;
        return profiledata;
      });
    }));
 
    this.Tododata = this.TodoCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const Tododata = a.payload.doc.data() as Todo;   
        Tododata.id = a.payload.doc.id;
        return Tododata;
      });
    }));

    this.contactdata = this.ContactCollection.valueChanges();
  }
  GetData() {
    return this.data;
  }
  GetCardData() {
    return this.carddata;
  }
  GetSuggestionData() {
    return this.suggestiondata;
  }
  GetProfileData() {
    return this.profiledata;
  }
  GetTodo() {
    return this.Tododata;
  }
  AddCatData(catdata) {
    this.CategoryCollection.add(catdata);
  }
  DeleteData(id) {
    this.afs.doc('CategoryCollection/' + id).delete();
  }
  UpdateCat(cd) {
    this.afs.doc('CategoryCollection/' + cd.id).update(cd);
  }
  AddCard(ac){
    this.FlashcardCollection.add(ac);
  }
  DeleteCard(id) {
    this.afs.doc('FlashcardCollection/' + id).delete();
  }
  UpdateCard(uc){
    this.afs.doc('FlashcardCollection/' + uc.id).update(uc);
  }
  AddSuggestion(addsugg){
    this.SuggestionCollection.add(addsugg);
  }
  ContactSend(coda){
    this.ContactCollection.add(coda);
  }
  AddProfile(ap) {
    this.ProfileCollection.add(ap);
  }
  AddTodoData(atd){
    this.TodoCollection.add(atd);
  }
  DeleteTodo(dtd){
    this.afs.doc('TodoCollection/' + dtd).delete();
  }
}

