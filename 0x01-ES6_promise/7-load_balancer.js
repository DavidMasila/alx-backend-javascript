export default function loadBalancer(chinaDownload, USDownload) {
  return Promise
    .race([
      chinaDownload(), USDownload()
    ]).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err.name + ' ' + err);
    });
}
