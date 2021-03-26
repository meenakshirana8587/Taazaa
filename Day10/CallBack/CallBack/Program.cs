using System;

namespace CallBack
{
    class Program
    {
        static void Main(string[] args)
        {
            Manager m1 = new Manager();
            Message message1 = new Message
            {
                Address = "abc",
                Content = "this is message"
            };

            Manager.sendMessageDelegate md = SendTypes.SendByCar;
            m1.Requestdelevery(message1, md);
            Agent a = new Agent();
            a.notificationChanged += new Agent.NotificationHandler(ShowNotification);

        }

        public static void ShowNotification(object theClock, NotificationEventArgs e)
        {
            Console.WriteLine(e.status);
        }
    }
}
