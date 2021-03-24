using System;
using System.Collections.Generic;
using System.Text;

namespace Eventsdemo
{
    public class Inventory
    {

       
            public void subscribe(Clock theclock)
            {
                theclock.SecondChanged += new Clock.SecondChangeHandler(TimeHasChanged);
            }

            public void TimeHasChanged(object theClock, TimeInfoEventArgs ti)
            {
                Console.WriteLine("Curent Time : {0}:{1}:{2}", ti.hour.ToString(), ti.minute.ToString(), ti.second.ToString());
            }

        
        }
    }

