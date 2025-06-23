import { Injectable } from '@angular/core';
import { collection, getDocs, addDoc, deleteDoc, doc, getFirestore } from 'firebase/firestore';
import { Firestore, collectionData } from '@angular/fire/firestore';    
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getShortcuts(): Observable<any[]> {
    const shortcutsRef = collection(this.firestore, 'shortcuts');
    return collectionData(shortcutsRef, { idField: 'id' });
  }

  addShortcut(data: any) {
    const shortcutsRef = collection(this.firestore, 'shortcuts');
    return addDoc(shortcutsRef, data);
  }

  deleteShortcut(id: string) {
    const docRef = doc(this.firestore, `shortcuts/${id}`);
    return deleteDoc(docRef);
  }
}
