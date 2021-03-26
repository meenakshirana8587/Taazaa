using System;
using System.Collections.Generic;
using System.Text;

namespace CallBack
{
    class SendTypes
    {
        public static bool SendByEmail(Message m)
        {
            Console.WriteLine($"{m.Content} is deleiverd by email to {m.Address}");
            return true;
        }

        public static bool SendByCar(Message m)
        {
            Console.WriteLine($"{m.Content} is deleiverd by car to {m.Address}");
            return true;
        }

        public static bool SendByAir(Message m)
        {
            Console.WriteLine($"{m.Content} is  not deleiverd by Airplane to {m.Address}");
            return false;
        }
    }
}
