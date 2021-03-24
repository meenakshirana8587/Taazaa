using System;
using System.Collections.Generic;
using System.Text;

namespace RealTimedelegate
{
    public class AudioPlayer
    {
        private int audiostatus;
        public int playAudio(string type)
        {
            
            if(type!= "mp3")
            {
                audiostatus = -1;
            }
            else
            {
                audiostatus = 0;
            }

            return audiostatus;
        }

    }
}
