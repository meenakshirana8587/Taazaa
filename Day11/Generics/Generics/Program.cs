using System;

namespace Generics
{
    class Program
    {
        static void Main(string[] args)
        {

            TestClass<int> obj = new TestClass<int>();
            obj.Add(5);
            obj.Add(6);
            obj.Add(7);
            obj.Add(8);
            obj.Add(9);

            TestClass<Product> products = new TestClass<Product>();
            products.Add(new Product
            {
                Id = 1,
                Title = "Book",
                Price = 200
            });
            products.Add(new Product
            {
                Id = 2,
                Title = "Book",
                Price = 200
            });
            products.Add(new Product
            {
                Id = 3,
                Title = "Book",
                Price = 200
            });
            products.Add(new Product
            {
                Id = 4,
                Title = "Book",
                Price = 200
            });
            products.Add(new Product
            {
                Id = 5,
                Title = "Book",
                Price = 200
            });

            for (int i=0; i< 5; i++)
            {
                Console.WriteLine(obj[i]);
            }
            for(int i=0; i<5; i++)
            {
               Console.WriteLine( products[i].ToString());

            }
            




            static void swap<T>( ref T item1, ref T item2)
            {
                T temp;
                temp = item1;
                item1 = item2;
                item2 = temp;
            }
            Product item1 = new Product(){
                Title = "book",
                Price = 200,
                Id = 2
            };

            Product item2 = new Product(){
                Title = "book",
                Price = 200,
                Id = 1
            };
            Console.WriteLine(item1 + "" + item2);
            swap<Product>(ref item1, ref item2);
            Console.WriteLine(item1 + ""+  item2);


        }
    }
}
