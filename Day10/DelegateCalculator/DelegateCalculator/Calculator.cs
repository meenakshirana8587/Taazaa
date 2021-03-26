using System;
using System.Collections.Generic;
using System.Text;

namespace DelegateCalculator
{
    class Calculator
    {
        public int Num1 { get; set; }
        public int Num2 { get; set; }

        public int Add(int n1, int n2)
        {
            int res = n1 + n2;
            return res;
        }
        public int Sub(int n1, int n2)
        {
            int res = n1 - n2;
            return res;
        }
        public int Mul(int n1, int n2)
        {
            int res = n1 * n2;
            return res;
        }


    }
}
