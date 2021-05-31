using DepartmentalStoreApi.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DepartmentalStoreApi.Models
{
    public class StaffModel
    {
        public string Firstname { get; set; }
        public string LastName { get; set; }
        public char Gender { get; set; }
        public DateTime DateOfBirth { get; set; } = DateTime.MinValue;
        public string Phone { get; set; }
        //public string Role { get; set; }

        //public string AddressLine1 { get; set; }
        //public string AddressLine2 { get; set; }
        //public string City { get; set; }
        //public string State { get; set; }
        //public string Pincode { get; set; }


       

        public RoleModel Role { get; set; }
        public AddressModel Address { get; set; }







    }
}
