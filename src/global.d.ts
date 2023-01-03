/* eslint-disable no-var */
import type { Firestore } from "/firebase/firestore";

declare global {
    var db: Firestore;
}
