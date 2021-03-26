using System;
using System.Collections.Generic;
using System.Text;

namespace Generics
{
    class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Price { get; set; }

        public override string ToString()
        {
            string str = this.Id + " " + this.Price + " " + this.Title;
            
            return str;

        }
            

            

    }

}
