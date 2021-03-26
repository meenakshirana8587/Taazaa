using System;

namespace SimpleExpressionTree
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Func<int, int> square = (x) => x * x;

            Console.WriteLine(square(7));
            System.Linq.Expressions.Expression<Func<int, int>> e = x => x * x;
            var a = e.Compile();
            Console.WriteLine(a(7));
        }
    }
}
