using System;
using System.Collections.Generic;
using System.Text;

namespace polymorphism
{
    class Person
    {

        public int Age { get; set; }
        public string Name { get; set; }

        public Person(int age, string name)
        {
            this.Age = age;
            this.Name = name;
        }

        private string name;
        public string _Name
        {
            get => name;
            set => name = value;
        }






        public  override  string ToString()
        {
             string s= Name + " is " + Age + " years old";
            Console.WriteLine(s);
            return s;
        }

        
       
        
        
    }
}
