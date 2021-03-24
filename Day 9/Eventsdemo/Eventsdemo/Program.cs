using System;

namespace Eventsdemo
{
    class Program
    {
        static void Main(string[] args)
        {
            Clock c = new Clock();
            DisplayClock dc = new DisplayClock();
            dc.subscribe(c);
            c.run();
        }
    }
}
