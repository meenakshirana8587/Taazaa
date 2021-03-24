using System;

namespace RealTimedelegate
{
    class Program
    {
        static void Main(string[] args)
        {
            MediaStorage ms = new MediaStorage();
            VideoPlayer vp = new VideoPlayer();
            AudioPlayer ap = new AudioPlayer();
            MediaStorage.MediaPlayer Play = ap.playAudio;

            ms.reportResult(Play, "mp3");
            Play = vp.playVideo;

            ms.reportResult(Play, "mp3");

        }
    }
}
