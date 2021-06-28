export default function({ isHMR, app, store, route, params, error, redirect }) {
  if (isHMR) return;
  console.log(route.fullPath);
  if (route.fullPath == "/") {
    console.log("1");
    return redirect("/film");
  } else if (route.fullPath == "/film") {
    console.log("2");
    return redirect("/film/aaa");
  }
}
