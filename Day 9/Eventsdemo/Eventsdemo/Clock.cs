using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace Eventsdemo
{
    public class Clock
    {
        private int hour;
        private int minute;
        private int second;

        public delegate void SecondChangeHandler(object clock, TimeInfoEventArgs timeInfo);

        public SecondChangeHandler SecondChanged;


        public void run()
        {
            for (; ;  )
            {
                Thread.Sleep(100);
                System.DateTime dt = System.DateTime.Now;
                if(dt.Second!= second)
                {
                    TimeInfoEventArgs timeInfo = new TimeInfoEventArgs(dt.Hour, dt.Minute, dt.Second);
                    if(SecondChanged != null)
                    {
                        SecondChanged(this, timeInfo);
                    }

                }

                this.second = dt.Second;
                this.minute = dt.Minute;
                this.hour = dt.Hour;
            }
        }
        

    }
}
