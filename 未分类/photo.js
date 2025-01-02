const axios = require("axios").default;
const fs = require("fs");
const path = require("path");

// 图片 ID 数组
const imageIds = []; // 你可以添加更多 ID

// 桌面路径
const desktopPath = path.join(
  require("os").homedir(),
  "Desktop",
  "douban_images"
);

// 检查并创建桌面文件夹
if (!fs.existsSync(desktopPath)) {
  fs.mkdirSync(desktopPath);
}

// 下载图片函数
const downloadImage = async (url, imagePath) => {
  try {
    // 检查文件是否已存在
    if (fs.existsSync(imagePath)) {
      // console.log(`文件 ${path.basename(imagePath)} 已存在，覆盖文件...`);
      return;
    }
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        Referer: "https://www.douban.com/",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    return new Promise((resolve, reject) => {
      const writer = fs.createWriteStream(imagePath);
      response.data.pipe(writer);
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  } catch (e) {
    throw e;
  }
};

// 主逻辑
const fetchImages = async () => {
  if (imageIds.length) {
    for (const imageId of imageIds) {
      let imageDownloaded = false;
      for (let imgPrefix = 0; imgPrefix <= 10; imgPrefix++) {
        const url = `https://img${imgPrefix}.doubanio.com/view/photo/raw/public/p${imageId}.jpg`;
        const imagePath = path.join(desktopPath, `p${imageId}.jpg`);
        // console.log(`尝试下载图片: ${url}`);
        try {
          await downloadImage(url, imagePath);
          console.log(`成功下载图片: ${url}`);
          imageDownloaded = true;
          break; // 成功下载后跳出循环
        } catch {
          // console.log(
          //   `图片 ${imageId} 在 img${imgPrefix} 未找到，尝试下一个 img 前缀`
          // );
        }
      }

      if (!imageDownloaded) {
        console.error(`图片 ${imageId} 下载失败`);
      }
    }
    console.log("图片下载任务完成！");
  } else {
    console.error("无资源下载");
  }
};

// 执行脚本
fetchImages();
