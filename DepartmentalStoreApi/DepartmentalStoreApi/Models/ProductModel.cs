using DepartmentalStoreApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentalStoreApi.Models
{
    public class ProductModel
    {
        //public long Id { get; set; }
        public string ProductName { get; set; }
        public string BrandName { get; set; }
        public string ShortCode { get; set; }

        public decimal CostPrice { get; set; }
        public decimal SellingPrice { get; set; }

        //public List<ProductCategoryModel> Categories { get; set; }
        //public ProductModel()
        //{
        //    Categories = new List<ProductCategoryModel>();
        //}

       

    }
}
