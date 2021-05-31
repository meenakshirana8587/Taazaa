using AutoMapper;
using DepartmentalStoreApi.Entities;
using DepartmentalStoreApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentalStoreApi.Data
{
    public class StoreProfile:Profile
    {

        public StoreProfile()
        {
            this.CreateMap<Staff, StaffModel>();
            

            this.CreateMap<Product, ProductModel>();
            this.CreateMap<Address, AddressModel>();
            this.CreateMap<Role, RoleModel>();
            this.CreateMap<ProductCategory, ProductCategoryModel>();
        }
    }
}
