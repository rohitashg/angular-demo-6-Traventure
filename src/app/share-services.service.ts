import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { IUserList } from './iuser-list';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class ShareServicesService {

    private _url:string = "assets/data/employees.json";    
    private _userListUrl:string = "http://localhost:3232/userList";
    private _detail_url:string = 'http://localhost:3232/getUserById';
    constructor(private http:HttpClient) { }
    getServices(){
      return [
        {'id':1,'name':"rohi","age":26},
        {'id':2,'name':"rohASi","age":26},
        {'id':3,'name':"rohADSi","age":26},
        {'id':4,'name':"rohADi","age":26},
        {'id':5,'name':"roQEhi","age":26},
        {'id':6,'name':"rohQWEi","age":26},
        {'id':7,'name':"roQWhi","age":26},
        {'id':8,'name':"roQWhi","age":26},
        {'id':9,'name':"roWEWQEVChi","age":26},
        {'id':10,'name':"rCVBohi","age":26},
        {'id':11,'name':"roVCBChi","age":26},
        {'id':12,'name':"roCVBCVhi","age":26},
        {'id':13,'name':"rBoCVBCVhi","age":26},
        {'id':14,'name':"roVCBCVBhi","age":26},
        {'id':15,'name':"roVCVCBhi","age":26},
        {'id':16,'name':"rVCBCVBohi","age":26},
        {'id':17,'name':"rohVCBCVi","age":26},
        {'id':18,'name':"rohBVCVCi","age":26},
        {'id':19,'name':"roVCBCVBhi","age":26},        
      ]
    }
    
    getEmployeesList():Observable<IEmployee[]> {
      return this.http.get<IEmployee[]>(this._url)
                      .catch(this.errorHandler);                      
    }
    
    getUserList():Observable<IUserList[]> {
      return this.http.get<IUserList[]>(this._userListUrl)
                      .catch(this.errorHandler);
    }
    viewUser(id):Observable<IUserList[]> {
      return this.http.get<IUserList[]>(this._detail_url + '/' + id);
    }
    errorHandler(error:HttpErrorResponse){
      return Observable.throw(error.message || "server error")
    }
    
}
