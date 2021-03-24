using System;
using System.Collections.Generic;
using System.Text;

namespace RealTimedelegate
{
    class VideoPlayer
    {

        private int videostatus;
        public int playVideo(string type)
        {

            if (type != "mp4")
            {
                videostatus = -1;
            }
            else
            {
                videostatus = 0;
            }

            return videostatus;
        }

    }
}
