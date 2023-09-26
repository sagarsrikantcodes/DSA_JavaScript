/*
Get Maze Path With Jumps






*/

function getMazePaths(sr, sc, dr, dc) {
  // Base case condition
  if (sr === dr && sc === dc) {
    let bres = [];
    bres.push("");
    return bres;
  } else if (sr > dr || sc > dc) {
    let bres = [];
    return bres;
  }

  let paths = [];

  for (let hms = 1; hms <= dc - sc; hms += 1) {
    let hpaths = getMazePaths(sr, sc + hms, dr, dc);
    hpaths.forEach(hpath => paths.push("h" + hms + hpaths));
  }

  for (let vms = 1; vms <= dr - sr; vms += 1) {
    let vpaths = getMazePaths(sr + vms, sc, dr, dc);
    vpaths.forEach(vpath => paths.push("v" + vms + vpaths));
  }

  for (let dms = 1; dms <= dr - sr && dms <= dc - sc; dms += 1) {
    let dpaths = getMazePaths(sr + dms, sc + dms, dr, dc);
    dpaths.forEach(dpath => paths.push("d" + dms + dpath));
  }

  return paths;
}

console.log(getMazePaths(0, 0, 1, 1)); // [ 'h1v1', 'v1h1', 'd1' ]

/*

Code in Java

// sr - source row
  // sc - source column
  // dr - destination row
  // dc - destination column
  public static ArrayList< String> getMazePaths(int sr, int sc, int dr, int dc) {

    if (sr == dr && sc == dc)
    {
      ArrayList< String> bres = new ArrayList< >();
      bres.add("");
      return bres;
    }
    else if (sr > dr || sc > dc)
    {
      ArrayList< String> bres = new ArrayList< >();
      return bres;
    }

    ArrayList< String> paths = new ArrayList< >();
    for (int hms = 1; hms <= dc - sc; hms++)
    {
      ArrayList< String> hpaths = getMazePaths(sr, sc + hms, dr, dc);

      for (String hpath : hpaths)
      {
        paths.add("h" + hms + hpath);
      }
    }

    for (int vms = 1; vms <= dr - sr; vms++)
    {
      ArrayList< String> vpaths = getMazePaths(sr + vms, sc, dr, dc);

      for (String vpath : vpaths) {
        paths.add("v" + vms + vpath);
      }
    }

    for (int dms = 1; dms <= dr - sr && dms <= dc - sc; dms++)
    {
      ArrayList< String> dpaths = getMazePaths(sr + dms, sc + dms, dr, dc);

      for (String dpath : dpaths)    {
        paths.add("d" + dms + dpath);
      }
    }
    return paths;
  }


*/