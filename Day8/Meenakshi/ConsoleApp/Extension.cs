using Core;
using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp
{
     static class Extension
    {
        public static void displayProduct(this Product p)
        {
            Console.WriteLine(p.Title + "\n " + p.price + " \n" + p.Color);
        }
    }
}
