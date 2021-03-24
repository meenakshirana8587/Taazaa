using System;
using System.Collections.Generic;
using System.Text;

namespace RealTimedelegate
{
     public class MediaStorage
    {

        public delegate int MediaPlayer(string s);



        public void reportResult(MediaPlayer mp, string type)
        {
            var status = mp(type);
            if(status == 0)
            {
                Console.WriteLine("Media played successfully");
            }

            else
            {
                Console.WriteLine("Failed to play media");
            }
        }
    }
}
