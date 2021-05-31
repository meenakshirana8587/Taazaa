using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentalStoreApi.Entities
{
    public class Category
    {
        public Category()
        {
            ProductCategories = new List<ProductCategory>();
        }
        public long Id { get; set; }
        public string CategoryName { get; set; }
        public List<ProductCategory> ProductCategories { get; set; }
    }
}
