class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()
  }

  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    return string.toUpperCase()

  }
}