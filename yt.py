from pytube import YouTube

# Function to download video
def download_video(video_url):
    try:
        yt = YouTube("https://youtu.be/uHCJoNEWjXo")
        stream = yt.streams.get_highest_resolution()  # Get highest resolution video
        stream.download()  # Download video to the current working directory
        print(f"Downloaded: {yt.title}")
    except Exception as e:
        print(f"Error: {e}")

# URL of the video
video_url = input("https://youtu.be/uHCJoNEWjXo")
download_video()
