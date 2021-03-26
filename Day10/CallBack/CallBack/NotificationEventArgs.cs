using System;
using System.Collections.Generic;
using System.Text;

namespace CallBack
{
    public class NotificationEventArgs
    {
        public bool status;
        public NotificationEventArgs(bool a)
        {
            status = a;
        }
    }
}
