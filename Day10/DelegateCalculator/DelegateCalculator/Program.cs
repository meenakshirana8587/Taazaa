using System;

namespace DelegateCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            DelegateResult del = new DelegateResult();
            Calculator cal = new Calculator();
            DelegateResult.mydelegate dl = cal.Add;
            
            dl += cal.Mul;
            del.PrintResult(dl, 3, 4);
        }
    }
}
