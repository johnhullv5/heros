import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
       {id: 1, name: 'Mr. hao'},
  {id: 2, name: 'll'},
  {id: 3, name: 'liubao'}
    ];
    return {heroes};
  }
}
