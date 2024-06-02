export default function ajax(options = {}) {
  let xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  if (!xhr) throw new Error("Error");
  let method = (options.method || "GET").toUpperCase(),
    url = options.url,
    async = options.async || true,
    data = options.data || {},
    success = options.success || function () {},
    error = options.error || function () {};
  if (method === "POST") {
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data = formatData(data);
  }
  xhr.open(method, url, async);
  xhr.send(data);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success();
    } else {
      error();
    }
  };
}

function formatData(data) {
  let str = ``;
  for (const key in data) {
    str += key + "=" + data[key] + "&";
  }
  return str.replace(/&$/, "");
}
