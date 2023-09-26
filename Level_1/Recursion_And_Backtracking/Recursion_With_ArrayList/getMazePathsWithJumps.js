/*
Get Maze Path With Jumps

Analysis
Well, this is going to be fun. Try and understand every step from here as it is going to be a little bit tilted to mathematics.

Time Complexity :
The time complexity of the algorithm will depend on 3 recursive calls, one which is made for rows, the second which is made for the columns, and the other which is made for the diagonals.

T(n, m) = T(n, m - 1) [Row call] + T(n - 1, m) [Column call] + T(n - 1, m - 1) [Diagonal call]
T(n, m) <= 3T(n - 1, m)

T(n, m) <= (3 ^ n)T(0, m)

Total time complexity = O(3 ^ (n + m))

Space Complexity 
The space complexity cannot be defined when space is increasing continuously (as the Arraylist size keeps on increasing with new paths being added). In these situations, the space complexity is approx the same as time complexity. Remember, the space complexity is only valid if we have used any extra memory or data structure. We used Arraylist because we were asked to store the paths in the question. So, we have not used any extra data structure. So, the space complexity will be O(1).

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