'use strict';

class Question{
  constructor(content){
    this.content = content
    this.save()
  }

  save(){
    this.constructor._All.push(this)
  }

  static All(){
    return this._All;
  }

  static Find(id){
    // id 1
    // [Question1, Question2, Question3]
    // index 0 id - 1
    return this.All()[id - 1]
  }
}

Question._All = []
