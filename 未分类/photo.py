import requests
import os
import time
from random import randint

# 图片 ID 数组
image_ids = [
    '2847631157', '2847631158', '2847631159'  # 你可以添加更多的 ID
]

# 本地桌面文件夹路径
desktop_path = os.path.join(os.path.expanduser("~"), "Desktop", "douban_images")
if not os.path.exists(desktop_path):
    os.makedirs(desktop_path)

# 用户代理列表
user_agents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0'
]

# 遍历每个 ID 并尝试下载
for image_id in image_ids:
    for img_prefix in range(11):  # 尝试从 img0 到 img10
        url = f"https://img{img_prefix}.doubanio.com/view/photo/raw/public/p{image_id}.jpg"
        headers = {
            'User-Agent': user_agents[randint(0, len(user_agents) - 1)]  # 随机选择一个用户代理
        }
        try:
            response = requests.get(url, headers=headers, stream=True)
            if response.status_code == 200:
                image_path = os.path.join(desktop_path, f"p{image_id}.jpg")
                with open(image_path, 'wb') as file:
                    for chunk in response.iter_content(1024):
                        file.write(chunk)
                print(f"成功下载图片：{image_path}")
                break  # 下载成功后跳出当前循环
            else:
                print(f"尝试 img{img_prefix} 时图片 {image_id} 未找到")

            # 在每次请求之间添加间隔，防止过快访问
            time.sleep(randint(1, 3))

        except requests.exceptions.RequestException as e:
            print(f"下载图片 {image_id} 时出错：{e}")
            # 重试延迟
            time.sleep(2)

print("图片下载任务完成！")