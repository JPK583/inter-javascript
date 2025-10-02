

function upper1(array, n) {
    return array.filter(function(value) {
      return value > n;
    });
  }

function head(array) {
    if (array.length === 0) {
        return undefined;
    }
    return array[0];
}
  
function tail(array) {
    if (array.length === 0) {
        return [];
    }
    return array.slice(1);
}

function concat(head, tail) {
    return [head].concat(tail);
}

function upper(array, n) {
    if (array.length == 0) {
        return []
    }
    else {
        let h = head(array)
        let t = tail(array)
        if (h > n) {
            return concat(h, upper(t, n));
        }
        else {
            return upper(t, n);
        }
    }
}

// console.log(upper([1,4,2,5],3));

function lower(array, n) {
    if (array.length == 0) {
        return []
    }
    else {
        let h = head(array)
        let t = tail(array)
        if (h < n) {
            return concat(h, lower(t, n));
        }
        else {
            return lower(t, n);
        }
    }
}

// console.log(lower([1,4,2,5],3));

function equals(array, n) {
    if (array.length == 0) {
        return []
    }
    else {
        let h = head(array)
        let t = tail(array)
        if (h == n) {
            return concat(h, equals(t, n));
        }
        else {
            return equals(t, n);
        }
    }
}

// console.log(equals([1,4,2,3,5],3));

function sort(array) { 
    console.log("s=",array)
    if (array.length == 0) {
        return []
    }
    n = array[0];
    a = sort(lower(array, n))
    console.log("a = ",a)
    b = equals(array, n)
    console.log("b = ",b)
    c = sort(upper(array, n))
    console.log("c = ",c)
    console.log("a=",a,"b=",b,"c=",c)
    return a.concat(b).concat(c)
}

console.log(sort([3,1,6,3,8,1,9,3]))