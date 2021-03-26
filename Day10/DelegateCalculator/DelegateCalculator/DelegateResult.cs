using System;
using System.Collections.Generic;
using System.Text;

namespace DelegateCalculator
{
   
    public class DelegateResult
    {
        public delegate int mydelegate(int num1, int num2);

        public void PrintResult(mydelegate d, int n1, int n2)
        {
            int result = d(n1, n2);
            Console.WriteLine(result);
            
        }


    }
}
