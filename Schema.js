module.exports = class Schema {
  _defined = [
    "type",
    "required",
    "length",
    "unique",
    "mutable",
    "lowercase",
    "default",
  ];
  _schemaObject = {};
  errors = {
    schema: [],
    validation: {},
  };

  _arr = [];

  constructor(table, schemaObj) {
    this._table = table;

    this._keys = Object.keys(schemaObj);
    this._values = Object.values(schemaObj);

    this._keys.forEach((key, index) => {
      const obj = schemaObj[key];
      const objKeys = Object.keys(obj);

      const filterKeys = this._defined.filter(
        (prop) => objKeys.indexOf(prop) !== -1
      );

      this._arr.push(filterKeys)
    });
  }

  validate() {
    // console.log(this.errors);

    merge(this._arr[0], this._values[0])

    function merge(typeArr, obj) {
      const keys = Object.keys(obj)
      const indexof = typeArr.filter(type => keys.indexOf(type) !== -1)
      console.log(indexof);

      
    }
  }
};




/**
 *! From (main) branch
 * 
 * module.exports = class Schema {
  _defined = [
    "type",
    "required",
    "length",
    "unique",
    "mutable",
    "lowercase",
    "default",
  ];
  _schemaObject = {};
  errors = {
    schema: [],
    validation: {},
  };

  _arr = [];

  constructor(table, schemaObj) {
    this._table = table;

    this._keys = Object.keys(schemaObj);
    this._values = Object.values(schemaObj);

    this._keys.forEach((key, index) => {
      const obj = schemaObj[key];
      const objKeys = Object.keys(obj);

      const filterKeys = this._defined.filter(
        (prop) => objKeys.indexOf(prop) !== -1
      );

      this._arr.push(filterKeys)
    });
  }

  validate() {
    // console.log(this.errors);

    merge(this._arr[0], this._values[0])

    function merge(typeArr, obj) {
      const keys = Object.keys(obj)
      const indexof = typeArr.filter(type => keys.indexOf(type) !== -1)
      console.log(indexof);

      
    }
  }
};

 * 
 */